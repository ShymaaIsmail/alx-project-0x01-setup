import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = (props) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-blue-700">{props.name}</h2>
        <p className="text-sm text-gray-500">@{props.username}</p>
      </div>

      <div className="mb-4">
        <p className="text-gray-700">
          📧 <span className="font-medium">Email:</span> {props.email}
        </p>
        <p className="text-gray-700">
          📞 <span className="font-medium">Phone:</span> {props.phone}
        </p>
        <p className="text-gray-700">
          🌐 <span className="font-medium">Website:</span>{" "}
          <a
            href={`https://${props.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {props.website}
          </a>
        </p>
      </div>

      <div className="mb-4">
        <h3 className="text-lg font-semibold text-gray-800">🏠 Address</h3>
        <p className="text-gray-700">
          {props.address.suite}, {props.address.street}, {props.address.city}{" "}
          {props.address.zipcode}
        </p>
        <p className="text-gray-500 text-sm">
          (Geo: {props.address.geo.lat}, {props.address.geo.lng})
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-800">🏢 Company</h3>
        <p className="text-gray-700">{props.company.name}</p>
        <p className="text-gray-500 text-sm italic">
          “{props.company.catchPhrase}”
        </p>
        <p className="text-gray-500 text-sm">{props.company.bs}</p>
      </div>
    </div>
  );
};

export default UserCard;
