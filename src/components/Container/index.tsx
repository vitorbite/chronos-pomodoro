import styles from "./styles.module.css";

type ContainerProps = {
  children: React.ReactNode;
};
export function Container({ children }: ContainerProps /*props*/) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
