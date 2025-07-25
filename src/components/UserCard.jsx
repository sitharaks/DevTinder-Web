import React from 'react'

const UserCard = ({user}) => {
  return (
    <div>
      <div className="card flex py-auto mx-auto bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={user.photoUrl}
      alt="pic" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{user.firstName}</h2>
    <p>{user.bio}</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Accept</button>
      <button className="btn btn-primary">Ignore</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default UserCard
