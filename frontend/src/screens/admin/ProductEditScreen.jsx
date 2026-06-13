import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import Message from '../../components/Message';
import Loader from '../../components/Loader';
import FormContainer from '../../components/FormContainer';
import { toast } from 'react-toastify';
import {
  useGetProductDetailsQuery,
  useUpdateProductMutation,
  useUploadProductImageMutation,
} from '../../slices/productsApiSlice';

const ProductEditScreen = () => {
  const { id: productId } = useParams();

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState('');

  const { data: product, isLoading, refetch, error } = useGetProductDetailsQuery(productId);
  const [updateProduct, { isLoading: loadingUpdate }] = useUpdateProductMutation();
  const [uploadProductImage, { isLoading: loadingUpload }] = useUploadProductImageMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (product) {
      setName(product.name);
      setPrice(product.price);
      setImage(product.image);
      setCategory(product.category);
      setCountInStock(product.countInStock);
      setDescription(product.description);
    }
  }, [product]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await updateProduct({
        productId,
        name,
        price,
        image,
        category,
        description,
        countInStock,
      }).unwrap();
      toast.success('Poslastica uspešno ažurirana');
      refetch();
      navigate('/admin/productlist');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  const uploadFileHandler = async (e) => {
    const formData = new FormData();
    formData.append('image', e.target.files[0]);
    try {
      const res = await uploadProductImage(formData).unwrap();
      setImage(res.image);
      toast.success('Slika uspešno otpremljena');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <div className='admin-screen'>
      <Link to='/admin/productlist' className='admin-back-btn'>
        ← Nazad na listu
      </Link>

      <FormContainer>
        <h1 className='admin-title' style={{ fontSize: '1.6rem' }}>
          <span className='admin-title-icon'>✏️</span> Izmena Poslastice
        </h1>

        {loadingUpdate && <Loader />}

        {isLoading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error?.data?.message || error.error}</Message>
        ) : (
          <Form onSubmit={submitHandler} className='admin-form'>

            <Form.Group controlId='name' className='mb-3'>
              <Form.Label className='admin-label'>Naziv</Form.Label>
              <Form.Control
                type='text'
                placeholder='Naziv poslastice'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='admin-input'
              />
            </Form.Group>

            <Form.Group controlId='price' className='mb-3'>
              <Form.Label className='admin-label'>Cena (RSD)</Form.Label>
              <Form.Control
                type='number'
                placeholder='Cena u RSD'
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className='admin-input'
              />
            </Form.Group>

            <Form.Group controlId='image' className='mb-3'>
              <Form.Label className='admin-label'>Slika</Form.Label>
              <Form.Control
                type='text'
                placeholder='URL slike'
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className='admin-input'
              />
              <Form.Control
                type='file'
                label='Ili otpremi sliku'
                onChange={uploadFileHandler}
                className='admin-input mt-2'
              />
              {loadingUpload && <Loader />}
            </Form.Group>

            <Form.Group controlId='countInStock' className='mb-3'>
              <Form.Label className='admin-label'>Dostupna količina</Form.Label>
              <Form.Control
                type='number'
                placeholder='Komada na stanju'
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
                className='admin-input'
              />
            </Form.Group>

            <Form.Group controlId='category' className='mb-3'>
              <Form.Label className='admin-label'>Kategorija</Form.Label>
              <Form.Control
                type='text'
                placeholder='npr. Torte, Kolači, Krofne, Pite'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className='admin-input'
              />
            </Form.Group>

            <Form.Group controlId='description' className='mb-3'>
              <Form.Label className='admin-label'>Opis</Form.Label>
              <Form.Control
                as='textarea'
                rows={3}
                placeholder='Opis poslastice'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className='admin-input'
              />
            </Form.Group>

            <Button type='submit' className='admin-btn-submit'>
              Sačuvaj izmene
            </Button>
          </Form>
        )}
      </FormContainer>
    </div>
  );
};

export default ProductEditScreen;
