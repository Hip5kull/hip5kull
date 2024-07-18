from scapy.all import *

interface = "eth0" #Adapt to your network interface name
ip_range = "10.10.X.X/24" #Change to your IP Block
broadcastMac = "ff:ff:ff:ff:ff:ff"

packet = Ether(dst=broadcastMac)/ARP(pdst = ip_range)

ans, unans = srp(packet, timeout=2, iface=interface, inter=0.1)

for send,receive in ans:
  print(receive.sprintf(r"%Ether.src% - %ARP.psrc%"))
