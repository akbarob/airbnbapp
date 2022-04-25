import { Card, CardBody,CardImg,CardHeader, Badge, CardImgOverlay  } from "reactstrap"
export default function Contacts(props){
    
    
    return(
        <div className=" col-12 col-sm-6 col-lg-3 mx-auto">
            <div className="row">
            <Card className=" my-3">
                <CardImg src={props.img} className="cat-image align-self-center"/>
                
                <CardBody className="row">
                    <h3><strong>{props.name}</strong></h3>
                    <p>
                        <span ><i class="fa-solid fa-phone"></i> {props.phoneno}</span>
                    </p>
                    <p>
                        <span ><i class="fa-solid fa-envelope"></i> {props.email}</span>
                    </p>
                </CardBody>
            </Card>

            
            </div>
        </div>

    )
}
