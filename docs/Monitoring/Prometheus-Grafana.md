# Installation Prometheus/Graphana

## Create a Debian12 VM
1. To create Debian12 VM on the Proxmox Cluster
```sh
qm create <vm_id> \
  --name <vm_name> \
  --sockets 1 \
  --cores <vm_cpus> \
  --memory <vm_mem_mb> \
  --net0 virtio,bridge=<vm_bridge>

qm disk import <vm_id> /mnt/pve/cfs-common-install/template/iso/debian-12-generic-amd64.img vms-<(infra|infopen|onlineplatforms)> -format raw

qm set <vm_id> --scsihw virtio-scsi-pci --scsi0 vms-<(infra|infopen|onlineplatforms)>:vm-<vm_id>-disk-0

qm resize <vm_id> scsi0 +xG # Replace x with a number to resize debian disk

qm set <vm_id> --ide2 vms-<(infra|infopen|onlineplatforms)>:cloudinit

qm set <vm_id> --boot c --bootdisk scsi0
```
## Prometheus Installation
1. Download prometheus
```sh
wget https://github.com/prometheus/prometheus/releases/download/v2.46.0/prometheus-2.46.0.linux-amd64.tar.gz
```
2. Extract archive
```sh
sudo tar xzf prometheus-2.46.0.linux-amd64.tar.gz
```
3. Move prometheus archive from ~ to  /usr/share/
```sh
sudo mv prometheus-2.46.0.linux-amd64/ /usr/share/prometheus
```
4. Add prometheus user
```sh
sudo useradd -u 3434 -d /usr/share/prometheus -s /bin/false prometheus
```
5. Create data directory
```sh
sudo mkdir -p /var/lib/prometheus/data
```
6. Change data's owner
```sh
sudo chown prometheus:prometheus /var/lib/prometheus/data
```
7. Change prometheus' directory owner
```sh
sudo chown -R prometheus:prometheus /usr/share/prometheus
```
8. Check if that's all right
```sh
/usr/share/prometheus/prometheus --config.file=/usr/share/prometheus/prometheus.yml
```
9. Create prometheus.service into SystemD
```sh
sudo vim /etc/systemd/system/prometheus.service
```
```ini
[Unit]
    Description=Prometheus Server
    Documentation=https://prometheus.io/docs/introduction/overview/
    After=network-online.target

    [Service]
    User=prometheus
    Restart=on-failure
    WorkingDirectory=/usr/share/prometheus
    ExecStart=/usr/share/prometheus/prometheus --config.file=/usr/share/prometheus/prometheus.yml

    [Install]
    WantedBy=multi-user.target

```
10. Reload & Start prometheus.service
```sh
sudo systemctl daemon-reload
sudo systemctl enable prometheus
sudo systemctl start prometheus
sudo systemctl status prometheus

```
11. prometheus.yml configuration

```sh
sudo vim /usr/share/prometheus/prometheus.yml
```

```yml
# my global config
global:
  scrape_interval: 15s # Set the scrape interval to every 15 seconds. Default is every 1 minute.
  evaluation_interval: 15s # Evaluate rules every 15 seconds. The default is every 1 minute.
  # scrape_timeout is set to the global default (10s).

# Alertmanager configuration
alerting:
  alertmanagers:
    - static_configs:
        - targets:
          # - alertmanager:9093

# Load rules once and periodically evaluate them according to the global 'evaluation_interval'.
rule_files:
  # - "first_rules.yml"
  # - "second_rules.yml"

# A scrape configuration containing exactly one endpoint to scrape:
# Here it's Prometheus itself.
scrape_configs:
  # The job name is added as a label `job=<job_name>` to any timeseries scraped from this config.
  - job_name: "proxmox"

    # metrics_path defaults to '/metrics'
    # scheme defaults to 'http'.

    static_configs:
      - targets: 
        - 10.3.0.2
        - 10.3.0.3
        - 10.3.0.4
    metrics_path: /pve
    params:
      module: [default]
    relabel_configs:
      - source_labels: [__address__]
        target_label: __param_target
      - source_labels: [__param_target]
        target_label: instance
      - target_label: __address__
        replacement: 127.0.0.1:9221
```
12. Restart prometheus.service
```sh
sudo systemctl restart prometheus.service
```
## Installation Grafana
1. Download grafana
```sh
wget https://dl.grafana.com/enterprise/release/grafana-enterprise-10.0.0.linux-amd64.tar.gz
```
2. Extract archive
```sh
sudo tar -zxvf grafana-enterprise-10.0.0.linux-amd64.tar.gz
```
3. Move grafana archive from ~ to  /usr/share/
```sh
sudo mv grafana-10.0.0/ /usr/share/grafana
```
4. Add prometheus user
```sh
sudo useradd -d /usr/share/grafana -s /bin/false grafana
```
5. Create grafana directories
```sh
sudo mkdir -p /var/lib/grafana/plugins /etc/grafana /var/log/grafana
```
6. Change /var/liv/grafana's owner
```sh
sudo chown -R grafana:grafana /var/lib/grafana
```
7. Copy grafana-server binary to /usr/sbin/
```sh
sudo cp /usr/share/grafana/bin/grafana-server /usr/sbin/
```
8. Copy sample.ini to /etc/grafana/grafana.ini
```sh
sudo cp /usr/share/grafana/conf/sample.ini /etc/grafana/grafana.ini
```
9. Create grafana-server.service
```sh
sudo vim /etc/default/grafana-server
```
```ini
GRAFANA_USER=grafana
GRAFANA_GROUP=grafana
GRAFANA_HOME=/usr/share/grafana
LOG_DIR=/var/log/grafana
DATA_DIR=/var/lib/grafana
MAX_OPEN_FILES=10000
CONF_DIR=/etc/grafana
CONF_FILE=/etc/grafana/grafana.ini
RESTART_ON_UPGRADE=true
PLUGINS_DIR=/var/lib/grafana/plugins
PROVISIONING_CFG_DIR=/etc/grafana/provisioning
PID_FILE_DIR=/var/run/grafana
```
```sh
sudo vim /etc/systemd/system/grafana-service.service
```

```ini
[Unit]
Description=Grafana instance
Documentation=http://docs.grafana.org
Wants=network-online.target
After=network-online.target
After=postgresql.service mariadb.service mysql.service

[Service]
EnvironmentFile=/etc/default/grafana-server
User=grafana
Group=grafana
Type=simple
Restart=on-failure
WorkingDirectory=/usr/share/grafana/
RuntimeDirectory=grafana
RuntimeDirectoryMode=0750
ExecStart=/usr/share/grafana/bin/grafana-server                                     \
                            --config=${CONF_FILE}                                   \
                            --pidfile=${PID_FILE_DIR}/grafana-server.pid            \
                            cfg:default.paths.logs=${LOG_DIR}                       \
                            cfg:default.paths.data=${DATA_DIR}                      \
                            cfg:default.paths.plugins=${PLUGINS_DIR}                \
                            cfg:default.paths.provisioning=${PROVISIONING_CFG_DIR}


LimitNOFILE=10000
TimeoutStopSec=20
UMask=0027

[Install]
WantedBy=multi-user.target
```
```sh
sudo systemctl daemon-reload
sudo systemctl enable grafana-server
sudo systemctl start grafana-server
sudo systemctl status grafana-server
```

## Installation Prometheus_exporter

### Proxmox node01

```sh
pveum groupadd monitoring -comment 'Monitoring group'
pveum aclmod / -group monitoring -role PVEAuditor
pveum useradd pve_exporter@pve
pveum usermod pve_exporter@pve -group monitoring
pveum passwd pve_exporter@pve
```
### Exporter's Installation

1. Install Python3-Pip package
```sh
sudo apt install python3-pip
```
2. Install prometheus-pve-exporter

*Without create python virtual environment you can add --break-system-packages to download pve_exporter*
```sh
sudo python3-pip install prometheus-pve-exporter
```

```sh
sudo mkdir -p /usr/share/pve_exporter/
```
3. Create /usr/share/pve_exporter/pve_exporter.yml
```yml
default:
  user: pve_exporter@pve
  password: y2DYfVzzeJJ0/N0Cplw=
  verify_ssl: false
```
4. Create pve_exporter.service into systemD
```ini
[Unit]
Description=Proxmox VE Prometheus Exporter
After=network.target
Wants=network.target

[Service]
Restart=on-failure
WorkingDirectory=/usr/share/pve_exporter
ExecStart=/usr/local/bin/pve_exporter /usr/share/pve_exporter/pve_exporter.yml 9221 127.0.0.1

[Install]
WantedBy=multi-user.target
```
5. Reload & Start pve_exporter.service
```sh
sudo systemctl daemon-reload
sudo systemctl enable pve_exporter
sudo systemctl start pve_exporter
sudo systemctl status pve_exporter
```
## Firewall Rules
To allow monitoring, we have to apply rules in the datacenter firewall
![firewall_rules](@site/static/img/proxmox_firewall_rules.png)
![firewall_rules](@site/static/img/proxmox_firewall_rules02.png)
## Dashboard Grafana

### Add Datasources
![dashboard_grafana](@site/static/img/grafana_datasources01.png)
![dashboard_grafana](@site/static/img/grafana_datasources02.png)
### Import Dashboard
![dashboard_grafana](@site/static/imggrafana_dashboard01.png)
![dashboard_grafana](@site/static/imggrafana_dashboard02.png)
![dashboard_grafana](@site/static/imggrafana_dashboard03.png)
![dashboard_grafana](@site/static/img/grafana_dashboard04.png)
