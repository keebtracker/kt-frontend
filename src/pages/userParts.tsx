import Nav from "../components/Nav/Nav";
import UserPartRow from "../components/UserPartRow/UserPartRow";

// Apollo Client imports for fetching data
import { gql, useQuery } from "@apollo/client";

// Issue with react and having this apollo function be called "use" Query so renamed it
const fakeUseQuery = useQuery;

const GET_USERPARTS = gql`
  query getUserParts {
    userParts {
      id
      name
      buildIdList {
        name
      }
      datePurchased
      purchasedPrice
      purchasedFrom
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
          <div className="p-5 h-screen bg-slate-900">
            <h1 className="text-xl mb-2">Your Parts</h1>

            <div className="overflow-auto rounded-lg shadow">
              <div className="bg-gray-200 p-5 flex justify-end">
                <button className="p-2 bg-gray-400 rounded hover:bg-black text-white">
                  Add Part
                </button>
              </div>
              <table className="w-full text-center">
                <thead className="bg-gray-50 border-b-2 border-gray-200">
                  <tr>
                    <th className="w-32 p-3">Part Name</th>
                    <th className="w-32 p-3">Builds Part is In</th>
                    <th className="w-32 p-3">Date Purchased</th>
                    <th className="w-20 p-3">Purchase Price</th>
                    <th className="w-32 p-3">Purchased From</th>
                  </tr>
                </thead>
                <tbody>
                  {data.userParts.map((userPart: any) => (
                    <UserPartRow userPart={userPart}></UserPartRow>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default userParts;
