

export default function List(props){
    return(
      <li>
          {props.list && props.list.name}
      </li>
    )
}

