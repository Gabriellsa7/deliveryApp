import { FaCheckCircle } from "react-icons/fa";

interface OrderConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
}
const OrderPlaced = ({ isOpen, onClose }: OrderConfirmationModalProps) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 w-full">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white rounded-lg p-8 z-50 max-w-md mx-auto">
        <div className="flex flex-col items-center">
          <FaCheckCircle className="text-green-500 text-6xl mb-4" />
          <h2 className="text-2xl font-bold mb-2">Request Placed</h2>
          <p className="text-center mb-4">
            Your order has been placed successfully!
          </p>
          <button
            onClick={onClose}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderPlaced;
