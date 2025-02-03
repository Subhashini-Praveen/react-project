import {useEffect, useCallback } from 'react';
import { productsListApi, deleteApi } from '../redux/productsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function ProductsList() {
    const navigate = useNavigate();

    const listData = useSelector(state => state.products.products);
    console.log(listData, '0---------------data');

    const dispatch = useDispatch();
    const callListsApi = useCallback(() => {
        const val = dispatch(productsListApi());
        console.log(val, '----val');
    }, [dispatch]);
    

    useEffect(() => {
        callListsApi();
    }, [callListsApi]);


function handleAddButton(id) {
    console.log('add');
    navigate('/add');
}
function handleDelete(id) {
    console.log('e-----f-----', id);
   dispatch(deleteApi(id)).then((res) => {
              console.log('khjgdf=------');
          }).catch((e) => {
              console.log('lohfhvsdm------', e);
          });
    navigate('/');
}


    return (
        <div>
  <h1> E Commers Website </h1>
      <h3> 
        Products List
            </h3>
            <div>
      <button onClick={handleAddButton}>Add New Product</button>
</div>
      <div>
        <table width='100%'>
          <tr>
            <th>Product No</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Action</th>
                    </tr>
                    {listData.map((obj)=> (
                          <tr style={{textAlign:'center'}}>
                            <td>{ obj.id}</td>
                            <td>{ obj.name}</td>
                            <td>{ obj.price}</td>
                            <td><button onClick={() => handleDelete( obj.id )}>Delete</button></td>
                            </tr>
                    ))}
        
        </table>
            </div>
            </div>
    );
}
export default ProductsList;