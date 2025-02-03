import{ useState } from "react";
import { useDispatch } from "react-redux";
import { addProductApi } from "../redux/productsSlice";
import { useNavigate } from "react-router-dom";

function AddProduct() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const navigate = useNavigate();
    
    const dispatch = useDispatch();

    function handleAddProduct() {
        dispatch(addProductApi({ name, price })).then((res) => {
            console.log('khjgdf=------');
        }).catch((e) => {
            console.log('lohfhvsdm------', e);
        });
        navigate('/');
    }

    return (
        <div>
            <h1> Add New Product </h1>
            <form onSubmit={handleAddProduct}>
                <label> Name
                    <input type='text' value={name} onChange={(e)=> {setName(e.target.value)}}>
                    </input>
                </label>
               
                <label> Price
                    <input type='text' value={price} onChange={(e)=> {setPrice(e.target.value)}}>
                    </input>
                </label>
                <br></br>
                <br></br>
                <input type='submit'></input>
            </form>
        </div>
    );
}
export default AddProduct;