import Element from './model/Element'

interface ServerInterface {

  getCollection (slug: string): Promise<Element[]>

  getElement (slug: string, id: string): Promise<Element>

}

export default ServerInterface
