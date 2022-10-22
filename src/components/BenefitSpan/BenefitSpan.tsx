import './BenefitSpan.scss'

interface BenefitSpanProps {
  color: string;
  text: string;
  icon: JSX.Element;
}

export function BenefitSpan({ color, text, icon }: BenefitSpanProps) {
  return (
    <div className={`${color} benefitSpanWrapper`}>
      <>
        {icon}
      </>
      <span>
        {text}
      </span>
    </div>
  )
}
