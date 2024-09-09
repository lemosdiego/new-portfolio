"use client";

import { useEffect, useRef, useState } from "react";
import { Box, Typography } from "@mui/material";
import Styles from "./progressBar.module.css";
import { useInView } from "react-intersection-observer";

const ProgressBar = ({ title, percentage, color }) => {
  const [progressWidth, setProgressWidth] = useState("0%");
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      setProgressWidth(percentage);
    }
  }, [inView, percentage]);

  return (
    <Box className={Styles.container}>
      <Box className={Styles.containerText}>
        <Typography>{title}</Typography>
        <Typography>{percentage}</Typography>
      </Box>
      <Box className={Styles.containerProgress} ref={ref}>
        <Box
          className={Styles.progress}
          sx={{ width: progressWidth, backgroundColor: color }}
        />
      </Box>
    </Box>
  );
};

export default ProgressBar;
