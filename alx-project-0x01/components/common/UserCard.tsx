import { UserProps } from "@/interfaces";

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-blue-700">{user.name}</h2>
        <p className="text-sm text-gray-500">@{user.username}</p>
      </div>

      <div className="mb-4">
        <p className="text-gray-700">
          📧 <span className="font-medium">Email:</span> {user.email}
        </p>
        <p className="text-gray-700">
          📞 <span className="font-medium">Phone:</span> {user.phone}
        </p>
        <p className="text-gray-700">
          🌐 <span className="font-medium">Website:</span>{" "}
          <a
            href={`https://${user.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {user.website}
          </a>
        </p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800">🏠 Address</h3>
        <p className="text-gray-700">
          {user.address.suite}, {user.address.street}, {user.address.city}{" "}
          {user.address.zipcode}
        </p>
        <p className="text-gray-500 text-sm">
          (Geo: {user.address.geo.lat}, {user.address.geo.lng})
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-800">🏢 Company</h3>
        <p className="text-gray-700">{user.company.name}</p>
        <p className="text-gray-500 text-sm italic">
          “{user.company.catchPhrase}”
        </p>
        <p className="text-gray-500 text-sm">{user.company.bs}</p>
      </div>
    </div>
  );
};

export default UserCard;
