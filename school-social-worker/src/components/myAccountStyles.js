import styled from 'styled-components'

export const PageContainer = styled.div`
width: 100%;
display:flex;
justify-content: space-around;
flex-flow: row;
`;

export const LeftSide = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 width: 50%;
 background: #52abd8c9;
 color: white;
 padding: 0px;
 margin: 50px;
 border-radius: 10px;
 `;
export const RightSide = styled.div`
 display: flex;
 flex-direction: column;
 width: 50%;
 background: #52abd8c9;
 color: white;
 padding: 0px;
 margin: 50px;
 border-radius: 10px;
 `;
 
 export const ProfilePic = styled.img`
 border-radius: 100%;
 width: 100%;
 width: 100px;
 `;
export const Line = styled.div`
 display: flex;
 width: 100%;
 justify-content: space-between;
 padding: 15px;
`;
export const EditIconLine = styled.div`
 display: flex;
 width: 100%;
 justify-content: flex-end;
 padding: 15px;
`;