export default function UserProfilePage({ params }: { params: { username: string } }) {
    return (
        <div>
            <h1>User Profile Page</h1>
            <p>Username: {params.username}</p>
        </div>
    )
}