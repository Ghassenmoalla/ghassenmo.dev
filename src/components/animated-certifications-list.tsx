"use client";

import { motion } from "framer-motion";
import { CertificationCard } from "./certification-card";
import { Certification } from "@/data/certifications";

type AnimatedCertificationsListProps = {
  certifications: Certification[];
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export function AnimatedCertificationsList({
  certifications,
}: AnimatedCertificationsListProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid gap-6 md:grid-cols-2"
    >
      {certifications.map((certification, idx) => (
        <motion.div key={idx} variants={itemVariants as any}>
          <CertificationCard certification={certification} />
        </motion.div>
      ))}
    </motion.div>
  );
}
