import React from 'react'

function UserForm({ handleSubmit, name, setAge,setDescription, age, description, setName }) {
    return (
    <div>
    <form action="" onSubmit={handleSubmit} className="formClass">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                name="name"
                type="text"
                placeholder="Enter your username"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="age">Age </label>
              <input
                type="number"
                placeholder="Enter your age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
              <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                rows="5"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              ></textarea>
            </div>
            <button className="btn" type="submit">
              Submit
            </button>
          </form>
        
    </div>
    );
}

export default UserForm