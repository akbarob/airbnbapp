import { Card, CardBody,CardImg,CardHeader, Badge, CardImgOverlay  } from "reactstrap"
import swim from "../images/image 12.png"
export default function Cards(){
    return(
        <div>
            <Card className="col-3 col-sm-2 card border-0">
                <CardImg src={swim} className="card-image align-self-center">
                </CardImg>
                <CardImgOverlay className="card-overlay">
                <Badge className="bg-light text-dark mt-1">SOLD OUT</Badge>
                </CardImgOverlay>
                <CardBody className="card-body">
                    <p className="card-text"> <i class="fa-solid fa-star text-danger"></i> 5.0 <span className="grey">(6) • USA</span>
                    <br/>Life lessons with Katie Zaferes
                    <br/> <strong>From $136 </strong>/ person
                    </p>
                </CardBody>
            </Card>
        </div>

    )
}