import React from 'react';
import productData from '../products';
import { Row, Col } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
type Props = {};

const HomeScreen = (props: Props) => {
  return (
    <div>
      <h1>Latest Product</h1>
      <Row className='py-3'>
        {productData.map((data: [] | any) => (
          <Col xl={3} lg={4} md={6} sm={12} key={data._id}>
            <ProductCard products={data} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeScreen;
