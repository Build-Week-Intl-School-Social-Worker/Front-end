import React from "react";

export const StudentCard = props => {
    console.log(props.child);


    return (
        
        <div>
            <h3>Name: {props.child.name}</h3>
            <p>Age: {props.child.age}</p>
            <p>Grade: {props.child.grade}</p>
            {/* Image Here */}
            <p>Bio: {props.child.bio}</p>
            <p>Status: {props.child.status}</p>
            <p>Insurance Card: {props.child.insurance_card}</p>
            <p>Card Expiration Date: {props.child.expire_date}</p>
            <p>Birth Certificate: {props.child.birth_cert}</p>
            <p>Special Needs: {props.child.special_needs}</p>
            <div>
                <p>Representative: {props.child.child_rep}</p>
                <p>Rep. Phone: {props.child.child_rep_phone}</p>
                <p>Rep. Email: {props.child.child_rep_email}</p>
            </div>
        </div>
        
    );
}