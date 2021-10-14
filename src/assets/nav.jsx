import { Dropdown, Card, ListGroup, Button } from 'react-bootstrap'
import '../css/Nav.css'
import { Wicon } from '../assets/icons.jsx'
import React from 'react';
import WorkDrawer from './WorkDrawer.jsx';
import { GrClose } from 'react-icons/gr'
import { Link } from 'react-router-dom';

const User = () => {
    return (
        <div className='dropdown-wrapper'>
            <Dropdown type='button' className='link-dropdown line' variant='none'>
                <img className='img-dropdown' src="https://media-exp1.licdn.com/dms/image/C4D03AQHnI5P4nAH2DQ/profile-displayphoto-shrink_100_100/0/1611150787255?e=1636588800&amp;v=beta&amp;t=S943kSLOPvHQpv9PFnfXenrkvXET6esDDcKPKLSScF0" alt="Martyna Sowińska" />
                <Dropdown.Toggle variant='none' className='text-dropdown toggle-dropdown'>Me</Dropdown.Toggle>
                <Dropdown.Menu>
                    <div className='user-button-wrapper'>
                        <Link to='/' className='user-button btn btn-outline-primary'>View Profile</Link>
                    </div>
                    <Dropdown.Divider />
                    <Dropdown.Item className='main-dropdown' href="#action/1">Account</Dropdown.Item>
                    <Dropdown.Item className='secondary-dropdown' href="#action/2">Settings & Privacy</Dropdown.Item>
                    <Dropdown.Item className='secondary-dropdown' href="#action/3">Help</Dropdown.Item>
                    <Dropdown.Item className='secondary-dropdown' href="#action/4">Language</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item className='main-dropdown' href="#action/5">Manage</Dropdown.Item>
                    <Dropdown.Item className='secondary-dropdown' href="#action/6">Post & Activity</Dropdown.Item>
                    <Dropdown.Item className='secondary-dropdown' href="#action/7">Job Posting Account</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item className='secondary-dropdown' href="#action/8">Sign Out</Dropdown.Item>
                </Dropdown.Menu >
            </Dropdown>
        </div>
    )
}

class Work extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            right: false
        };
        this.toggleDrawer = this.toggleDrawer.bind(this);
    }

    toggleDrawer = open => () => {
        this.setState({
            right: open
        });
    };

    container = null;

    render() {
        return (
            <div className='dropdown-wrapper'>

                <Dropdown type='button' className='link-dropdown' >
                    <Wicon />
                    <Dropdown.Toggle variant='none' className='text-dropdown toggle-dropdown' onClick={this.toggleDrawer(true)}>Work</Dropdown.Toggle>
                </Dropdown>

                <WorkDrawer
                    className='drawer'
                    anchor="right"
                    variant="temporary"
                    open={this.state.right}
                    onClose={this.toggleDrawer(false)}
                >

                    <div className='row work-head'>
                        <button className='work-button' variant='none' onClick={this.toggleDrawer(false)}> <GrClose className='GrClose' /> </button>
                    </div>
                    <div className='work-content'>


                        <Card>
                            <Card.Title className='p-4 mb-0'>Visit More LinkedIn Products</Card.Title>
                            <ListGroup variant="flush" className='icon-list'>
                                <div className='ml-4 mt-2'>
                                    <small className='mb-1 pr-2'>Learning</small>
                                    <small className='mb-1 pr-2'>Insights</small>
                                    <small className='mb-1 pr-2'>Post a Job</small>
                                    <small className='mb-1 pr-2'>Advertise</small>
                                </div>

                                <div className='ml-4 mb-2'>
                                    <small className='mb-1 pr-2'>Find Leads</small>
                                    <small className='mb-1 pr-2'>Groups</small>
                                    <small className='mb-1 pr-2'>ProFinder</small>
                                    <small className='mb-1 pr-2'>Salary</small>
                                </div>
                            </ListGroup>
                        </Card>
                        <Card className='mt-2'>
                            <Card.Title className='p-4 mb-0'>LinkedIn Business Services</Card.Title>
                            <ListGroup variant="flush" className='work-title'>

                                <div className='work-list-sec'>
                                    <ListGroup.Item className='work-list'>Talent Solutions</ListGroup.Item>
                                    <small className='mb-1'>Find, attract and recruit talent</small>
                                </div>

                                <div className='work-list-sec'>
                                    <ListGroup.Item className='work-list'>Sales Solutions</ListGroup.Item>
                                    <small className='mb-1'>Unlock sales opportunities</small>
                                </div>

                                <div className='work-list-sec'>
                                    <ListGroup.Item className='work-list'>Post a job for free</ListGroup.Item>
                                    <small className='mb-1'>Get your job in front of quality candidates</small>
                                </div>

                                <div className='work-list-sec'>
                                    <ListGroup.Item className='work-list'>Marketing Solutions</ListGroup.Item>
                                    <small className='mb-1'>Acquire customers and grow your business</small>
                                </div>

                                <div className='work-list-sec'>
                                    <ListGroup.Item className='work-list'>Learning Solutions</ListGroup.Item>
                                    <small className='mb-1'>Develop talent across your organization</small>
                                </div>



                            </ListGroup>
                            <Card.Title className='work-list last'>Create Company Page</Card.Title>
                        </Card>


                    </div>
                </WorkDrawer>
            </div>
        )
    }
}




export { Work, User }



// function WorkModal() {

// const [show, setShow] = useState(false);

// const handleClose = () => setShow(false);
// const handleShow = () => setShow(true);

// return (
//     <>
//         <Dropdown.Toggle variant='none' className='text-dropdown toggle-dropdown' onClick={handleShow}>Work</Dropdown.Toggle>

//         <Modal className='work-modal' show={show} onHide={handleClose} >
//             <div className='work-content' >
//                 <Modal.Header className='work-head'>
//                     <GrClose className='work-head-close'/>
//                 </Modal.Header>
//                 <Modal.Body className='p-0'>
//                     <Card>
//                         <Card.Title className='p-4 mb-0'>Visit More LinkedIn Products</Card.Title>
//                         <ListGroup variant="flush" className='icon-list'>
//                             <div>
//                                 <small className='mb-1 pr-2'>Learning</small>
//                                 <small className='mb-1 pr-2'>Insights</small>
//                                 <small className='mb-1 pr-2'>Post a Job</small>
//                                 <small className='mb-1 pr-2'>Advertise</small>
//                             </div>

//                             <div>
//                                 <small className='mb-1 pr-2'>Find Leads</small>
//                                 <small className='mb-1 pr-2'>Groups</small>
//                                 <small className='mb-1 pr-2'>ProFinder</small>
//                                 <small className='mb-1 pr-2'>Salary</small>
//                             </div>
//                         </ListGroup>
//                     </Card>
//                     <Card className='mt-2'>
//                         <Card.Title className='p-4 mb-0'>LinkedIn Business Services</Card.Title>
//                         <ListGroup variant="flush" className='work-title'>

//                             <div className='work-list-sec'>
//                                 <ListGroup.Item className='work-list'>Talent Solutions</ListGroup.Item>
//                                 <small className='mb-1'>Find, attract and recruit talent</small>
//                             </div>

//                             <div className='work-list-sec'>
//                                 <ListGroup.Item className='work-list'>Sales Solutions</ListGroup.Item>
//                                 <small className='mb-1'>Unlock sales opportunities</small>
//                             </div>

//                             <div className='work-list-sec'>
//                                 <ListGroup.Item className='work-list'>Post a job for free</ListGroup.Item>
//                                 <small className='mb-1'>Get your job in front of quality candidates</small>
//                             </div>

//                             <div className='work-list-sec'>
//                                 <ListGroup.Item className='work-list'>Marketing Solutions</ListGroup.Item>
//                                 <small className='mb-1'>Acquire customers and grow your business</small>
//                             </div>

//                             <div className='work-list-sec'>
//                                 <ListGroup.Item className='work-list'>Learning Solutions</ListGroup.Item>
//                                 <small className='mb-1'>Develop talent across your organization</small>
//                             </div>



//                         </ListGroup>
//                         <Card.Title className='work-list last'>Create Company Page</Card.Title>
//                     </Card>
//                 </Modal.Body>
//             </div>
//         </Modal>
//     </>
// );
// }
