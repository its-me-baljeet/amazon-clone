import { Carousel } from "@material-tailwind/react";

export default function CarouselDefault() {
    return (
        <Carousel className="">
            <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Beauty/MaART25/Unrec1-pc._CB796676292_.jpg"
                alt="image 1"
                className="h-full w-full object-cover"
            />
            <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img15/GW/Mayart/25/op/rework/PC_Hero_Asin_3000x1200_OP._CB795267699_.jpg"
                alt="image 2"
                className="h-full w-full object-cover"
            />
            <img
                src="https://images-eu.ssl-images-amazon.com/images/G/31/INSLGW/MayART25/PEA/sd_men_2x._CB794841919_.jpg"
                alt="image 3"
                className="h-full w-full object-cover"
            />
        </Carousel>
    );
}