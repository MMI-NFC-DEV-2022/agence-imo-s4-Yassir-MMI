export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      Agent: {
        Row: {
          created_at: string
          id: number
          Id_user: string | null
          Nom: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          Id_user?: string | null
          Nom?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          Id_user?: string | null
          Nom?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_Agent_Id_user_fkey"
            columns: ["Id_user"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      Commune: {
        Row: {
          created_at: string
          id: number
          Nom: string | null
          Quartier: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          Nom?: string | null
          Quartier?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          Nom?: string | null
          Quartier?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "public_Commune_Quartier_fkey"
            columns: ["Quartier"]
            isOneToOne: false
            referencedRelation: "Quartier"
            referencedColumns: ["id"]
          }
        ]
      }
      Maison: {
        Row: {
          adresse: string | null
          created_at: string
          favori: boolean | null
          id: number
          image: string | null
          nbrChambre: number | null
          nbrSDB: number | null
          nomMaison: string | null
          prix: number | null
          surface: string | null
        }
        Insert: {
          adresse?: string | null
          created_at?: string
          favori?: boolean | null
          id?: number
          image?: string | null
          nbrChambre?: number | null
          nbrSDB?: number | null
          nomMaison?: string | null
          prix?: number | null
          surface?: string | null
        }
        Update: {
          adresse?: string | null
          created_at?: string
          favori?: boolean | null
          id?: number
          image?: string | null
          nbrChambre?: number | null
          nbrSDB?: number | null
          nomMaison?: string | null
          prix?: number | null
          surface?: string | null
        }
        Relationships: []
      }
      Quartier: {
        Row: {
          created_at: string
          id: number
          id_commune: number | null
          maisons: number | null
          nbr_habitants: number | null
          Nom: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          id_commune?: number | null
          maisons?: number | null
          nbr_habitants?: number | null
          Nom?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          id_commune?: number | null
          maisons?: number | null
          nbr_habitants?: number | null
          Nom?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_Quartier_id_commune_fkey"
            columns: ["id_commune"]
            isOneToOne: false
            referencedRelation: "Commune"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_Quartier_maisons_fkey"
            columns: ["maisons"]
            isOneToOne: false
            referencedRelation: "Maison"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
