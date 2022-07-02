import React from 'react';

const Home = () => {
    return (
        <div className=''>
            <div class="form-control">
                <label class="label">
                    <span class="label-text">Todo</span>
                </label>
                <label class="input-group">
                    <input type="text" placeholder="Enter task" class="input input-bordered" />
                    <span>Add</span>
                </label>
            </div>
        </div>
    );
};

export default Home;