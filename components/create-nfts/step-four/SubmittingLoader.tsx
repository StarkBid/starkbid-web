import { FC } from 'react';

const SubmittingLoader: FC = () => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div className="bg-gray-900 p-6 rounded-lg text-center">
      <p className="text-white mb-2">Submitting...</p>
      <div className="loader" />
    </div>
  </div>
);

export default SubmittingLoader;