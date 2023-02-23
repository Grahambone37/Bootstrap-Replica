import { Col, Container, Row, Image } from "react-bootstrap";


export default function StoreListings() {
    return (
        <Container>
            <br></br>
            <h2 style={{ textAlign: "center" }}>Choose your store in (redacted)</h2>
            <br></br>
            <Row>
                <Col xs="1">
                    <Image src="https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/279/59eb00b1-2e19-4912-bf2e-0c7a1f71f8b1.png" alt="sprouts logo" roundedCircle />
                </Col>
                <Col>
                    <h5 style={{ fontWeight: 'bold' }}>Sprouts Farmers Market</h5>
                    <p>Pickup #.#mi</p>
                </Col>
                <Col sm="1"></Col>
                <Col xs="1">
                    <Image src="https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/1487/5ffe3fb7-2a0c-4714-8c71-364d7186a3d3.png" alt="walmart logo" roundedCircle />
                </Col>
                <Col>
                    <h5 style={{ fontWeight: 'bold' }}>Walmart</h5>
                    <p>Delivery</p>
                </Col>
                <Col sm={1}></Col>
                <Col xs="1">
                    <Image src="https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/5/65f2304b-908e-4cd0-981d-0d4e4effa8de.png" alt="costco logo" roundedCircle />
                </Col>
                <Col>
                    <h5 style={{ fontWeight: 'bold' }}>Costco</h5>
                    <p>Delivery</p>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col xs="1">
                    <Image src="https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/38/bef2eb95-7375-4547-ab37-21502de090e0.png" alt="ralphs logo" roundedCircle />
                </Col>
                <Col>
                    <h5 style={{ fontWeight: 'bold' }}>Ralphs</h5>
                    <p>Delivery</p>
                </Col>
                <Col sm="1"></Col>
                <Col xs="1">
                    <Image src="https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/233/ca07b011-2df2-4e1d-bdef-e47d2d0f24d7.png" alt="Albertsons logo" roundedCircle />
                </Col>
                <Col>
                    <h5 style={{ fontWeight: 'bold' }}>Albertsons</h5>
                    <p>Delivery</p>
                </Col>
                <Col sm="1"></Col>
                <Col xs="1">
                    <Image src="https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/1556/3fca568c-4c4b-46ea-b6c0-0f397532bb70.png" alt="sprouts logo" roundedCircle />
                </Col>
                <Col>
                    <h5 style={{ fontWeight: 'bold' }}>Sprouts Farmers Market Ch...</h5>
                    <p>Delivery * Pickup #.#mi</p>
                </Col>
            </Row>
            <Row>
                <Col xs="1">
                    <Image src="https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/105/84a0af5d-8d7b-489c-9f78-7bf849dc4217.png" alt="smart-and-final logo" roundedCircle />
                </Col>
                <Col>
                    <h5 style={{ fontWeight: 'bold' }}>Smart & Final</h5>
                    <p>Delivery</p>
                </Col>
                <Col sm="1"></Col>
                <Col xs="1">
                    <Image src="https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/290/627b03bd-1ef8-4d74-8f3d-346f7f6d18a5.png" alt="Vons logo" roundedCircle />
                </Col>
                <Col>
                    <h5 style={{ fontWeight: 'bold' }}>Vons</h5>
                    <p>Delivery</p>
                </Col>
                <Col sm="1"></Col>
                <Col xs="1">
                    <Image src="https://www.instacart.com/image-server/58x58/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/563/25d5f4ec-1e5d-42f5-ae19-0ac31692d13d.png" alt="Food4Less logo" roundedCircle />
                </Col>
                <Col>
                    <h5 style={{ fontWeight: 'bold' }}>Food4Less</h5>
                    <p>Delivery</p>
                </Col>
            </Row>
        </Container>
    )
}