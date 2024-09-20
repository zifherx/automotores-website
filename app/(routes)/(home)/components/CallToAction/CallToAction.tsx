/* eslint-disable @next/next/no-img-element */

type iCallToAction = {
  imageSource: string;
};

export function CallToAction(props: iCallToAction) {
  const { imageSource } = props;
  return (
    <div className="w-full">
      <img
        src={`/images/actions/${imageSource}`}
        alt="Cover Geely"
        className="object-cover"
      />
    </div>
  );
}
