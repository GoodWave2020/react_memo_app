import { useCallback, useState } from "react";

// メモ一覧に関するカスタムフック
export const useMemoList = () => {
    // メモ一覧 State
    const [memos, setMemos] = useState<string[]>([]);

    const addTodo = useCallback((text: string) => {
        // State 変更を正常に検知させるため新たな配列を生成
        const newMemos = [...memos];
        // テキストボックスの入力内容をメモ配列に追加
        newMemos.push(text);
        setMemos(newMemos);
        // 依存配列を忘れずにmemosを設定
    }, [memos]);

    const deleteTodo = useCallback((index: number) => {
        // State 変更を正常に検知させるため新たな配列を生成
        const newMemos = [...memos];
        // メモ配列から該当の配列を削除
        newMemos.splice(index, 1);
        setMemos(newMemos);
    }, [memos]);

    return { memos, addTodo, deleteTodo };
};