import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const url = "https://api.punkapi.com/v2/beers";

function Productpage() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`${url}/${id}`);
                const data = await response.json();
                setProduct(data[0]);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, [id]);

    return (
        <div className="container mt-5">
            {product ? (
                <div className="row">
                    <div className="col-md-6">
                        <img src={product.image_url} style={{height:'35rem'}} className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <h2>{product.name}</h2>
                        <p className="text-muted">{product.tagline}</p>
                        <p><strong>First Brewed:</strong> {product.first_brewed}</p>
                        <p><strong>Description:</strong> {product.description}</p>
                        <p><strong>ABV:</strong> {product.abv}%</p>
                        <p><strong>IBU:</strong> {product.ibu}</p>
                        <p><strong>Ingredients:</strong></p>
                        <ul>
                            {product.ingredients.malt.map((ingredient, index) => (
                                <li key={index}>{ingredient.name}: {ingredient.amount.value} {ingredient.amount.unit}</li>
                            ))}
                            {product.ingredients.hops.map((ingredient, index) => (
                                <li key={index}>{ingredient.name}: {ingredient.amount.value} {ingredient.amount.unit} - {ingredient.add} ({ingredient.attribute})</li>
                            ))}
                        </ul>
                        <p><strong>Brewing Method:</strong></p>
                        <p><strong>Mash Temp:</strong> {product.method.mash_temp[0].temp.value} {product.method.mash_temp[0].temp.unit} for {product.method.mash_temp[0].duration} minutes</p>
                        <p><strong>Fermentation Temp:</strong> {product.method.fermentation.temp.value} {product.method.fermentation.temp.unit}</p>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Productpage;
