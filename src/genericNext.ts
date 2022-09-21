interface APIResponse<T> {
    status: number;
    type: string;
    data: T;
}

const response1: APIResponse<string> = {
    status: 200,
    type: "good",
    data:"s"
}