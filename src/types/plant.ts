export type ScaleValue = number;

export type CareType = "water" | "light";

export type PlantCategory = "classique" | "extérieur" | "plante grasse";

export interface Plant {
    name: string;
    category: PlantCategory;
    id: string;
    light: number;
    water: number;
    cover: string;
    price: number;
    description: string;
}

export type PlantCart = Plant & {
    onAddToCart : () => void;
}


export interface CartItem extends Plant {
    amount: number;
}

export type Cart = CartItem[]