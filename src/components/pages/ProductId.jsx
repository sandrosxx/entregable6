import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getProductThunk } from '../../store/slice/products.slice';

const ProductId = () => {
    const {id} = useParams();
    const productList= useSelector(state=>state.product)
    const dispatch= useDispatch();
    useEffect(()=>{
        dispatch(getProductThunk())
    },[]);
    const products = productList.find(product=> product.id=== Number(id))
   const relateproducts= productList.filter(product=>product.category.id === products.category.id)


    console.log(relateproducts);
    return (
        <div>
            <h1>{products?.title}</h1>
            <img src={products?.productImgs[0]} width='300px' alt="" />
            {relateproducts.map(relate=>(
                <li key={relate.id}>
                    <Link to={`/Product/${relate.id}`}>
                    <h3>{relate.title}</h3>
                    <img src={relate?.productImgs[0]} width='100px' alt="" />
                    </Link>
                </li>
            ))}
        </div>
    );
};

export default ProductId;