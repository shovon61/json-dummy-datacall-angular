export interface Idemo {
        id: number; 
        name: string;
        address: any;
        cuisines: any;
        rating: number;
        reviews: number;
        feature_image: any;
        thumbnail_image: any;
        menu: menuI[]
    }
export interface menuI {
                id: number;
                name: string;
                desc: string;
                price: number;
            }

