import { Header } from "@/components/layout/Header";

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}

const Users: React.FC = () => {
return (
        <div>Users</div>
)
}
export default Users;
