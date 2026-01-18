import { memo } from "react";
import { motion } from "framer-motion";
import profileImage from "../../assets/1715103607599.jpg";

interface ProfileImageProps {
  alt?: string;
}

export const ProfileImage = memo(({ alt = "Profile" }: ProfileImageProps) => (
  <motion.div
    className="relative w-64 h-80 md:w-72 md:h-96 rounded-3xl overflow-hidden border-8 border-white shadow-2xl"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    whileHover={{ scale: 1.02 }}
  >
    <img
      src={profileImage}
      alt={alt}
      className="w-full h-full object-cover"
      loading="eager"
      decoding="async"
    />
  </motion.div>
));

ProfileImage.displayName = "ProfileImage";
