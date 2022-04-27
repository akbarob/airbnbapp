import { Card, CardBody,CardImg, Badge, CardImgOverlay  } from "reactstrap"

export default function Cards(props){
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
        
    }else if (props.location === "UK")
        {badgeText ="ONLINE"}
    
    return(
        <div className="col-4 col-sm-3 col-md-2 card border-0 mx-auto">
            <Card className="border-0">
                <CardImg src={props.img} className="photo"/>
                 {badgeText && <CardImgOverlay className="card-overlay">
                     <Badge className="bg-light text-dark mt-1">{badgeText}</Badge>
                </CardImgOverlay>}
                <CardBody className="card-body">
                    <div className="row">
                        <h3 className="card-text">
                        <i class="fa-solid fa-star text-danger"></i> {props.rating} <span className="grey">{props.reviewCount} • {props.location}</span>
                        </h3>
                        <h4 className="card-text">
                            {props.title}
                        </h4>
                        <h4 className="card-text">
                            <strong>From ${props.price}</strong> / person
                        </h4>
                    </div>
                </CardBody>
            </Card>
        </div>
        
    )
}
