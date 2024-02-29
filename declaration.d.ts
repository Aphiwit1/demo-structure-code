declare module '*.svg' {
  const content: React.FC<React.SVGProps<SVGElement>>
  export default content
}

declare module '*.png' {
  const value: any
  export default value
}
