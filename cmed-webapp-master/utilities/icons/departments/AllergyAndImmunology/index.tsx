import * as React from 'react';

const Icon: React.FC = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={80}
      height={80}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M30.02 17.264c.449-.252.823-.617 1.083-1.058.26-.441.398-.943.398-1.453V9.908a.902.902 0 00-.269-.642.924.924 0 00-1.299 0 .902.902 0 00-.268.642v4.845a1.062 1.062 0 01-.55.93l-8.412 4.704a18.83 18.83 0 00-8.1 8.877.9.9 0 00.473 1.195.928.928 0 00.703.014.914.914 0 00.506-.482 17.02 17.02 0 017.322-8.024l8.412-4.703zM12.965 38.917a16.843 16.843 0 01.199-5.39.899.899 0 00-.392-.93.923.923 0 00-1.41.58 18.644 18.644 0 00-.22 5.962l.446 3.58v18.322c0 .24.097.471.269.641a.924.924 0 001.299 0 .902.902 0 00.269-.642V42.665a.915.915 0 00-.007-.111l-.453-3.636zm11.448 24.869a.916.916 0 00-.98.843l-.38 5.4a.898.898 0 00.245.683.919.919 0 00.672.288.925.925 0 00.626-.244.904.904 0 00.289-.6l.38-5.402a.9.9 0 00-.223-.658.922.922 0 00-.63-.31zm.398-11.932c-.592-2.465-.893-7.54-.893-7.54v-8.346a.903.903 0 00-.27-.642.924.924 0 00-1.298 0 .902.902 0 00-.27.642v13.033c0 1.748-.37 3.442-1.098 5.035a.9.9 0 00.458 1.201.927.927 0 001.215-.452c.23-.505.431-1.022.6-1.55l.079.327c.45 1.872.61 3.801.475 5.721l-.104 1.477a.896.896 0 00.245.682.918.918 0 00.672.288.925.925 0 00.626-.244.904.904 0 00.29-.6l.103-1.477a20.596 20.596 0 00-.52-6.267l-.31-1.288zm25.166-34.59l4.902 2.74a.926.926 0 001.252-.342.9.9 0 00-.347-1.238l-4.903-2.74a1.078 1.078 0 01-.549-.931V9.908A.913.913 0 0049.415 9a.913.913 0 00-.919.908v4.845c0 .51.138 1.012.398 1.453.26.441.635.806 1.084 1.058zm9.317 3.123l-.093-.052a.928.928 0 00-1.247.346.899.899 0 00.343 1.235l.093.051c6.106 3.414 9.498 10.068 8.64 16.95l-.452 3.636a.876.876 0 00-.007.11V61.04c0 .502.41.908.918.908a.913.913 0 00.919-.908V42.72l.446-3.58c.948-7.615-2.804-14.976-9.56-18.753zm-2.459 48.115a.922.922 0 00-1.609-.533.901.901 0 00-.223.659l.107 1.527a.898.898 0 00.314.622.921.921 0 00.666.22.922.922 0 00.63-.309.901.901 0 00.223-.659l-.108-1.527zm-.757-24.189c0 2.54-.3 5.07-.894 7.54l-.31 1.289c-.202.844-.351 1.7-.446 2.563a.9.9 0 00.197.667.921.921 0 001.291.14c.19-.152.312-.37.338-.61.087-.79.224-1.577.408-2.34l.078-.326c.17.527.37 1.045.6 1.549.1.22.285.39.513.475.228.085.481.077.703-.023a.912.912 0 00.48-.506.898.898 0 00-.022-.695 12.013 12.013 0 01-1.099-5.035V35.968a.913.913 0 00-.918-.908.913.913 0 00-.919.908v8.345zM34.052 25.401a.924.924 0 00-.65.266.902.902 0 00-.269.642v4.631c0 1.621-.363 3.256-1.05 4.727l-.73 1.562a.899.899 0 00-.024.692.912.912 0 00.476.507c.22.1.472.111.7.029a.915.915 0 00.517-.467l.729-1.562a13.058 13.058 0 001.22-5.488V26.31a.902.902 0 00-.27-.642.924.924 0 00-.65-.266zM46.976 37.99a.926.926 0 001.608.109.901.901 0 00.06-.87l-.73-1.562a11.247 11.247 0 01-1.05-4.727V26.31a.913.913 0 00-.918-.908.913.913 0 00-.919.908v4.631c0 1.882.422 3.78 1.22 5.488l.729 1.562zm-8.389-16.313c1.528 0 2.77-1.229 2.77-2.738 0-1.51-1.242-2.738-2.77-2.738-1.527 0-2.77 1.228-2.77 2.738s1.243 2.738 2.77 2.738zm0-3.66c.515 0 .933.413.933.922a.929.929 0 01-.933.922.929.929 0 01-.933-.922c0-.509.419-.922.933-.922zm-8.57 14.578c0-1.449-1.193-2.627-2.659-2.627-1.466 0-2.658 1.178-2.658 2.627 0 1.45 1.192 2.628 2.658 2.628s2.658-1.179 2.658-2.628zm-2.659.812a.817.817 0 01-.82-.812c0-.447.367-.812.82-.812.453 0 .822.364.822.812a.809.809 0 01-.241.574.827.827 0 01-.58.238zm24.48 9.578c0-1.32-1.087-2.395-2.423-2.395-1.337 0-2.423 1.074-2.423 2.395 0 1.32 1.087 2.395 2.423 2.395s2.423-1.074 2.423-2.395zm-2.423.58a.583.583 0 01-.587-.58c0-.32.263-.58.587-.58.323 0 .586.26.586.58 0 .32-.263.58-.586.58zm-11.462 5.573c1.634 0 2.964-1.315 2.964-2.93 0-1.616-1.33-2.93-2.964-2.93-1.635 0-2.965 1.314-2.965 2.93 0 1.615 1.33 2.93 2.965 2.93zm0-4.045c.621 0 1.127.5 1.127 1.115 0 .614-.506 1.114-1.127 1.114-.622 0-1.128-.5-1.128-1.114 0-.615.506-1.115 1.128-1.115zm-6.977 10.623c-1.471 0-2.669 1.184-2.669 2.639 0 1.454 1.198 2.638 2.67 2.638 1.471 0 2.668-1.184 2.668-2.638 0-1.455-1.197-2.638-2.669-2.638zm0 3.461a.828.828 0 01-.832-.822c0-.454.373-.823.832-.823.46 0 .832.37.832.823a.828.828 0 01-.832.822zm14.151-8.785c-1.472 0-2.669 1.184-2.669 2.638 0 1.455 1.197 2.639 2.669 2.639s2.669-1.184 2.669-2.639c0-1.454-1.197-2.638-2.669-2.638zm0 3.46a.828.828 0 01-.832-.822c0-.453.373-.822.832-.822.459 0 .832.369.832.822a.828.828 0 01-.832.823zm-1.425 9.249h-.173a3.266 3.266 0 00-.35-1.244l.3-.296a.902.902 0 00-.002-1.282.924.924 0 00-1.296-.002l-.246.243a3.365 3.365 0 00-.837-.364v-.313a.903.903 0 00-.27-.642.924.924 0 00-1.298 0 .903.903 0 00-.27.642v.313a3.363 3.363 0 00-.836.364l-.246-.243a.923.923 0 00-1.299 0 .902.902 0 000 1.284l.3.296c-.198.388-.317.81-.35 1.244h-.172a.924.924 0 00-.65.266.903.903 0 000 1.283c.173.17.406.266.65.266h.173c.032.434.151.856.35 1.244l-.3.297a.904.904 0 00-.2.989.926.926 0 001.498.294l.246-.243c.26.159.542.281.837.364v.313c0 .24.097.472.269.642a.924.924 0 001.299 0 .903.903 0 00.269-.642v-.313c.294-.083.576-.205.837-.364l.245.243c.18.178.415.266.65.266.235 0 .47-.088.65-.266a.902.902 0 000-1.283l-.3-.297c.198-.388.316-.81.349-1.244h.173a.926.926 0 00.65-.266.906.906 0 00.198-.989.91.91 0 00-.497-.491.929.929 0 00-.351-.07zm-3.523 3.071c-.84 0-1.523-.675-1.523-1.505V63.35c0-.83.683-1.505 1.523-1.505.84 0 1.523.675 1.523 1.505v1.317c0 .83-.683 1.505-1.523 1.505zm19.692-4.889h-.805a3.62 3.62 0 00-.404-.961l.57-.564a.902.902 0 00-.003-1.282.924.924 0 00-1.296-.002l-.57.564a3.709 3.709 0 00-.973-.4v-.796a.913.913 0 00-.918-.908.913.913 0 00-.919.908v.796c-.342.086-.67.221-.973.4l-.57-.564a.924.924 0 00-1.296.003.903.903 0 00-.003 1.28l.57.565c-.18.3-.317.623-.404.961h-.805a.913.913 0 00-.919.908c0 .501.411.908.919.908h.805c.087.338.224.662.404.962l-.57.563a.905.905 0 00-.2.99.91.91 0 00.34.407.926.926 0 001.159-.113l.57-.564c.304.18.631.314.973.4v.796c0 .502.411.908.919.908a.913.913 0 00.918-.908v-.796c.342-.086.67-.22.973-.4l.57.564a.922.922 0 001.3 0 .902.902 0 000-1.284l-.571-.564c.18-.3.317-.623.405-.961h.805a.928.928 0 00.659-.26.907.907 0 00.274-.648.9.9 0 00-.274-.647.92.92 0 00-.66-.26zm-4.4-.944c1.033 0 1.874.831 1.874 1.852 0 1.021-.84 1.852-1.874 1.852a1.865 1.865 0 01-1.873-1.852c0-1.02.84-1.852 1.873-1.852z"
        fill="#00534C"
      />
    </svg>
  );
};

export default Icon;
