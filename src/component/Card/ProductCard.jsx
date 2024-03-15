import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const ProductCard = ({ image, description }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = image;
    img.onload = () => {
      setImageLoaded(true);
    };
  }, [image]);

  return (
    <Card>
      <CardHeader>
        <img
          src={image}
          alt="Product Image"
          className={`h-64 w-80 object-cover  transition duration-300 ease-in-out transform hover:scale-150  ${
            imageLoaded ? "block" : "hidden"
          }`}
          onLoad={() => setImageLoaded(true)}
        />
      </CardHeader>
      <CardBody>
        <Typography color="blue-gray" className="font-medium">
          {description}
        </Typography>
      </CardBody>
    </Card>
  );
};

export default ProductCard;
