
let Loading = async () => {
  return (
    <>
     <Loader/>
    </>
  );
};


export const Loader = async () => {
    return (
      <>
        <div className="fixed top-0 left-0 z-50 w-screen h-screen flex justify-center items-center bg-gray bg-opacity-50">
          <div className="flex flex-col items-center space-y-4 text-white">
            <div className="loader"></div>
            <p>
              <div className="loader loader--style5" title={4}>
                <svg
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="24px"
                  height="30px"
                  viewBox="0 0 24 30"
                  style={{ enableBackground: "new 0 0 50 50" }}
                  xmlSpace="preserve"
                  fill="#FF6700"
                >
                  <rect x={0} y={0} width={4} height={10} fill="#333">
                    <animateTransform
                      attributeType="xml"
                      attributeName="transform"
                      type="translate"
                      values="0 0; 0 20; 0 0"
                      begin={0}
                      dur="0.6s"
                      repeatCount="indefinite"
                    />
                  </rect>
                  <rect x={10} y={0} width={4} height={10} fill="#333">
                    <animateTransform
                      attributeType="xml"
                      attributeName="transform"
                      type="translate"
                      values="0 0; 0 20; 0 0"
                      begin="0.2s"
                      dur="0.6s"
                      repeatCount="indefinite"
                    />
                  </rect>
                  <rect x={20} y={0} width={4} height={10} fill="#333">
                    <animateTransform
                      attributeType="xml"
                      attributeName="transform"
                      type="translate"
                      values="0 0; 0 20; 0 0"
                      begin="0.4s"
                      dur="0.6s"
                      repeatCount="indefinite"
                    />
                  </rect>
                </svg>
              </div>
            </p>
          </div>
        </div>
      </>
    );
  };
  

  
export default Loading;
