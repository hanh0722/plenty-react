import React from "react";
import styles from "./DetailBlog.module.scss";
import p1 from "../../../image/1_1170x.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
const DetailBlog = () => {
  return (
    <>
      <article className={styles.container}>
        <header className={`text-center ${styles.header}`}>
          <h6>Mix And Match</h6>
          <h4>The next generation of leather alternatives</h4>
          <p>
            Created by <span>ADMIN</span> on <span>Jul 31, 2021</span>
          </p>
        </header>
        <div className={styles.content}>
          <img src={p1} alt="" />
          <p>
            In 1928, a New York City designer named Irving Schott created the
            world's first leather motorcycle jacket. Naming it the "Perfecto"
            (after his favorite cigar), Schott crafted the coat out of
            horsehide, a rigid, durable material that soon after became
            fashion's leather of choice. The first Perfectos sold for just
            $5.50. By the 1950s, the leather jacket was a bona fide clothing
            mainstay.
          </p>
          <p>
            Today, leather is one of the most ubiquitous materials in the
            footwear and fashion industries. But the actual term "leather"
            hasn't always had the same definition that Schott would have used
            back in his 1920s heyday. In the last half a century, "leather" has
            expanded to include synthetic "pleather" variations, like
            polyurethane (PU) and polyvinyl chloride (PVC), which are not only
            made with fossil fuels, but also don't biodegrade. And while these
            alternatives are theoretically more animal-friendly, in that they
            don't actually require animal hides, they also aren't the
            eco-friendly substitute consumers may have been led to believe.
          </p>
        </div>
      </article>
      <div
        className={`d-flex justify-content-between align-items-center ${styles.options}`}
      >
        <div className={styles.tags}>
          Tags:
          <span>Accessories,</span>
          <span>Life Style</span>
        </div>
        <div className={`d-flex align-items-center ${styles.share}`}>
          Share:{" "}
          <span>
            <FontAwesomeIcon icon={faFacebookF} />
          </span>
          <span>
            <FontAwesomeIcon icon={faTwitter} />
          </span>
        </div>
      </div>
    </>
  );
};
export default DetailBlog;
