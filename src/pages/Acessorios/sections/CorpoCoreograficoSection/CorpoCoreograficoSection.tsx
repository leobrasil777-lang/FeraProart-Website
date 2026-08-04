import AccessoriesShowcaseSection, {
  type AccessoriesShowcaseItem,
} from '../../../../components/AccessoriesShowcaseSection'

const corpoCoreograficoItems: AccessoriesShowcaseItem[] = [
  { id: 'airblades', label: 'Airblades' },
  { id: 'bastao-led', label: 'Bastão de LED' },
  {
    id: 'bandeiras-corpo-coreografico',
    label: 'Bandeiras para Corpo Coreográfico',
  },
  { id: 'bastao-com-bandeira', label: 'Bastão com Bandeira' },
]

function CorpoCoreograficoSection() {
  return (
    <AccessoriesShowcaseSection
      id="acessorios-corpo-coreografico"
      eyebrow="Acessórios"
      title="Corpo"
      highlight="Coreográfico"
      items={corpoCoreograficoItems}
      theme="dark"
      contentSide="left"
      ariaLabel="Acessórios para Corpo Coreográfico"
      initialItemId="airblades"
    />
  )
}

export default CorpoCoreograficoSection
