import type { NextPage } from "next";
import { motion, useScroll, useTransform } from "framer-motion";

const Home: NextPage = () => {
  const { scrollYProgress } = useScroll();
  const scrollKeyFrames = [0, 0.25, 0.5, 0.75, 1];

  const envelopYPos = useTransform(
    scrollYProgress,
    scrollKeyFrames,
    [0, 0, 0, 0, 800]
  );
  const envelopLidClosedDeg = useTransform(
    scrollYProgress,
    scrollKeyFrames,
    [0, 90, 90, 90, 90]
  );
  const envelopLidOpenedDeg = useTransform(
    scrollYProgress,
    scrollKeyFrames,
    [90, 90, 180, 180, 180]
  );
  const letterYPos = useTransform(
    scrollYProgress,
    scrollKeyFrames,
    [0, 0, 0, -800, -800]
  );

  return (
    <motion.div
      className="envelop-wrapper"
      style={{
        y: envelopYPos,
      }}
      transition={{
        duration: 1,
      }}
    >
      <motion.div className="envelop-background" />
      <motion.div
        className="letter"
        style={{ y: letterYPos}}
        transition={{ duration: 2}}
      />
      <motion.div
        className="envelop-lip-closed"
        style={{
          rotateX: envelopLidClosedDeg,
        }}
      />
      <motion.div
        className="envelop-lip-opened"
        style={{
          rotateX: envelopLidOpenedDeg,
        }}
      />
      
      <motion.div className="envelop-bottom-left" />
      <motion.div className="envelop-bottom-right" />
    </motion.div>
  );
};

export default Home;
