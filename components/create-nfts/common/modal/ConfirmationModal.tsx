import { FC } from 'react';

interface Props {
  title: string;
  description: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmationModal: FC<Props> = ({ title, description, onConfirm, onCancel }) => (
  <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center">
    <div className="bg-gray-800 rounded-lg p-6 max-w-sm w-full">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex justify-end space-x-3">
        <button onClick={onCancel} className="px-4 py-2 rounded bg-gray-700">Cancel</button>
        <button onClick={onConfirm} className="px-4 py-2 rounded bg-purple-600 text-white">Confirm</button>
      </div>
    </div>
  </div>
);

export default ConfirmationModal;