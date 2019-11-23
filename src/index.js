import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
      <div className="ui container comments">
        <ApprovalCard>
            Are you sure you want to do this?
        </ApprovalCard>
        <ApprovalCard>
            <div><h4>WARNING</h4>This is a warning</div>
        </ApprovalCard>        
        <ApprovalCard>
            <CommentDetail author={faker.name.firstName()} 
                image={faker.image.avatar()} 
                timeAgo="Today at 2:00PM"
                comment={faker.lorem.sentences()}/>
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail author={faker.name.firstName()} 
                image={faker.image.avatar()} 
                timeAgo="Today at 1:30PM"
                comment={faker.lorem.sentences()}/>
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail author={faker.name.firstName()} 
                image={faker.image.avatar()} 
                timeAgo="Today at 12:00PM"
                comment={faker.lorem.sentences()}/>
        </ApprovalCard>              
      </div>

    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));