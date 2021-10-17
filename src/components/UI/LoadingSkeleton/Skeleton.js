import React, { useMemo } from "react";
import styles from "./Skeleton.module.scss";

const Skeleton = ({
  src,
  round,
  times,
  style,
  className,
  classSkeleton,
  reverse,
  imageClassName,
}) => {
  const valueRender = useMemo(() => {
    let defaultValue = 2;
    if (times) {
      defaultValue = times;
    }
    return defaultValue;
  }, [times]);
  const renderSkeleton = () => {
    const arraySkeleton = [];
    for (let i = 0; i < valueRender; i++) {
      arraySkeleton.push(
        <div key={i} className={`${styles.skeleton} ${classSkeleton}`} />
      );
    }
    return arraySkeleton;
  };
  return (
    <>
      <div
        className={`${
          src &&
          `d-flex ${
            reverse && "flex-row-reverse"
          } justify-content-between align-items-center`
        } ${styles.container} ${className}`}
      >
        {src && (
          <div
            className={`${styles.skeleton} ${styles.image} ${
              round && styles.round
            } ${imageClassName}`}
            style={{ ...style }}
          />
        )}
        <div
          className={`${styles["render--skeleton"]} ${
            src && styles["render--has--image"]
          }`}
        >
          {renderSkeleton()}
        </div>
      </div>
    </>
  );
};

export default Skeleton;
