import React from 'react'

export default function UserCard({ name, username, email }) {
    return (
        <div class="card" style={{ width: " 18rem", margin: 10 }}>
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{username}</h6>
                <p class="card-text">{email}</p>
                <a href="#" class="card-link">Show More</a>
                {/* <a href="#" class="card-link">Delete</a> */}
            </div>
        </div>
    )
}
