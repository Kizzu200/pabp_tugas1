export default function ProductDetailLoading() {
  return (
    <div className="container-custom py-8">
      {/* Breadcrumb Skeleton */}
      <div className="mb-6 h-4 w-64 bg-gray-200 rounded animate-pulse"></div>

      {/* Product Detail Skeleton */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8 p-8">
          {/* Image Skeleton */}
          <div>
            <div className="h-96 bg-gray-200 rounded-lg mb-4 animate-pulse"></div>
            <div className="grid grid-cols-4 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-20 bg-gray-200 rounded-lg animate-pulse"></div>
              ))}
            </div>
          </div>

          {/* Info Skeleton */}
          <div className="space-y-6">
            <div>
              <div className="h-4 w-32 bg-gray-200 rounded mb-2 animate-pulse"></div>
              <div className="h-8 w-3/4 bg-gray-200 rounded mb-2 animate-pulse"></div>
              <div className="h-6 w-1/2 bg-gray-200 rounded animate-pulse"></div>
            </div>
            <div className="h-12 w-1/2 bg-gray-200 rounded animate-pulse"></div>
            <div className="h-6 w-1/4 bg-gray-200 rounded animate-pulse"></div>
            <div className="space-y-2">
              <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
              <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse"></div>
            </div>
            <div className="h-12 w-full bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
