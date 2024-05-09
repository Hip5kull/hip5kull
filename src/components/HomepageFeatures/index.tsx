import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Tutorials',
    Svg: require('@site/static/img/38206-ffa348.svg').default,
    description: (
      <>
        Apprendre, partager et déployer - Vous trouverez toutes les stacks que j'ai utilisés et vous montre comment les mettre en œuvre. Il est possible que certaines documentations soient en anglais par habitude.
      </>
    ),
  },
  {
    title: 'Documentations',
    Svg: require('@site/static/img/linux-svgrepo-com.svg').default,
    description: (
      <>
        Utilisateur de la distribution <a href="https://kaisenlinux.org" target="_blank">Kaisen Linux</a> au quotidien, j'ai plongé dans l'univers Linux il y a de cela une dizaine d'années notament grâce aux Raspberry Pi.
      </>
    ),
  },
  {
    title: 'DevOps Culture',
    Svg: require('@site/static/img/1837436-ffa348.svg').default,
    description: (
      <>
      Passionné par la cybersécurité et fortement attiré par la culture DevOps / DevSecOps. Je cherche constamment à monter en compétence au travers d'outils, homelab et CTF.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
