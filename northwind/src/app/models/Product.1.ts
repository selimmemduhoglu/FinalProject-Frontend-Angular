// export : public demektir
// javascript te interface nin önüne I koyulmuyor koyulsa da olur ama burada kullanılmıyor


export interface Product {

    productId: number;
    categoryId: number;
    productName: string;
    unitsInStock: number;
    unitPrice: number;

}
