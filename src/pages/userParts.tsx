import Nav from "../components/Nav/Nav";

// Apollo Client imports for fetching data
import { gql, useQuery } from "@apollo/client";

// Issue with react and having this apollo function be called "use" Query so renamed it
const fakeUseQuery = useQuery;

const GET_USERPARTS = gql`
  query getUserParts {
    userParts {
      id
      name
      datePurchased
      buildIdList {
        name
      }
    }
  }
`;

function userParts() {
  const { loading, error, data } = fakeUseQuery(GET_USERPARTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something Went Wrong</p>;

  return (
    <div className="App">
      {!loading && !error && (
        <>
          <Nav />
          {data.userParts.map((userPart: any) => (<header className="App-header" key={userPart.id}>{userPart.name}</header>))}
        </>
      )}
    </div>
  );
}

export default userParts;
