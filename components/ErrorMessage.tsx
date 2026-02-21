interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

export default function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] px-4">
      <div className="text-center">
        <div className="text-6xl mb-4">⚠️</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Terjadi Kesalahan</h2>
        <p className="text-gray-600 mb-6">{message}</p>
        {onRetry && (
          <button onClick={onRetry} className="btn-primary">
            Coba Lagi
          </button>
        )}
      </div>
    </div>
  );
}
